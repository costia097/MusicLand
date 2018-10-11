import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="row main-content" xmlns="">
      <p>
        Чому ми ним користуємось?
        Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem
        Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде
        текст." Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук
        за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані. Різні версії Lorem Ipsum з'явились за
        минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).
      </p>
    </div>

    <div>
      AUDIO
      <audio id="audio-player" #audioPlayer (timeupdate)="timeUpdateAudioPlayer(audioPlayer,progressBar)">
        <source src="http://localhost:9090/test/abc.mp3"/>
      </audio>
      <button class="btn btn-style" (click)="onBtnPlay(audioPlayer)">Play</button>
      <button class="btn btn-style" (click)="onBtnPause(audioPlayer)">Pause</button>
      <button class="btn btn-style" (click)="onBtnUpVolume(audioPlayer)">+</button>
      <button class="btn btn-style" (click)="onBtnDownVolume(audioPlayer)">-</button>

      <span>
        <progress class="progress-bar" #progressBar value="0" max="1" (click)="tryChangeProgress(progressBar,$event,audioPlayer)"></progress>
        {{currentTimeParsed}}:{{durationParsed}} secs
      </span>
    </div>
  `,
  styleUrls: ['app.home.component.css']
})
export class AppHomeComponent {

  currentTimeParsed: string;
  durationParsed: string;

  tryChangeProgress(element: any, click: any, audioPlayer: any) {
    //TODO change values min = 15 max = 174 length = 159
    console.log('tryChangeProgress X' + click.clientX);
    let mouseX = click.clientX - 15;
    let progress = (100 / 159 * mouseX) / 100;
    console.log('Progress ' + progress);
    let newTime = audioPlayer.duration * progress;
    console.log('New value time is: ' + newTime);
    audioPlayer.currentTime = newTime;
  }

  timeUpdateAudioPlayer(audioPlayer: any, progressBar: any) {
    this.currentTimeParsed = parseFloat(audioPlayer.currentTime).toFixed(0);
    this.durationParsed = parseFloat(audioPlayer.duration).toFixed(0);
    console.log('currentTimeParsed ' + this.currentTimeParsed);
    let duration = audioPlayer.duration;
    let currentTime = audioPlayer.currentTime;
    progressBar.value = (100 / duration * currentTime) / 100;
  }

  onBtnPlay(element: any) {
    element.play();
  }

  onBtnPause(element: any) {
    element.pause();
  }

  onBtnUpVolume(element: any) {
    element.volume += 0.1;
  }

  onBtnDownVolume(element: any) {
    // TODO fix HTMLMediaElement': The volume provided (-0.1) is outside the range [0, 1].
    element.volume -= 0.1;
  }
}
