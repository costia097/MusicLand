import {Component} from '@angular/core';
import {p} from '@angular/core/src/render3';

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
      <audio id="audio-player" #audioPlayer (timeupdate)="timeUpdateAudioPlayer(audioPlayer,progressBar)" preload="none" >
        <source src="http://localhost:9090/test/abc.mp3"/>
      </audio>
      <button class="btn btn-style" (click)="onBtnPlay(audioPlayer)">Play</button>
      <button class="btn btn-style" (click)="onBtnPause(audioPlayer)">Pause</button>
      <button class="btn btn-style" (click)="onBtnUpVolume(audioPlayer)">+</button>
      <button class="btn btn-style" (click)="onBtnDownVolume(audioPlayer)">-</button>

      <span>
        <progress class="progress-bar" #progressBar value="0" max="1" (click)="tryChangeProgress(progressBar,$event,audioPlayer)"></progress>
        {{audioPlayer.duration/60.0}}
      </span>
    </div>
  `,
  styleUrls: ['app.home.component.css']
})
export class AppHomeComponent {

  tryChangeProgress(element: any, click: any) {
    // console.log('tryChangeProgress ' + element.offsetTop);
    // console.log('tryChangeProgress ' + element.offsetLeft);
    //TODO change values min = 15 max = 174 length = 159
    console.log('tryChangeProgress X' + click.clientX);
    let mouseX = click.clientX - 15;
    let progress = (100 / 159 * mouseX) / 100;
    console.log('Progress ' + progress);
    element.value = progress;
    // console.log('tryChangeProgress Y' + click.clientY);
  }

  timeUpdateAudioPlayer(audioPlayer: any, progressBar: any) {
    // console.log('timeUpdateAudioPlayer');
    let duration = audioPlayer.duration;
    let currentTime = audioPlayer.currentTime;

    let currentProgressValue = (100 / duration * currentTime) / 100;
    // console.log('timeUpdateAudioPlayer Duration: ' + duration);
    // console.log('timeUpdateAudioPlayer Current time: ' + currentTime);
    // console.log('currentProgressValue is: ' + currentProgressValue);
    progressBar.value = currentProgressValue;
    let progressBarValue = progressBar.value;
    // console.log('timeUpdateAudioPlayer progressBarValue: ' + progressBarValue);
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
