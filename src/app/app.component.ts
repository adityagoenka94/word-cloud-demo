import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'DynamicWordCloud';
  wordclouds = [
    { divid: 'wordcloud1', title: 'Word Cloud 1' },
    { divid: 'wordcloud2', title: 'Word Cloud 2' },
    { divid: 'wordcloud3', title: 'Word Cloud 3' }
  ];

 request = new HttpClient('https://api.myjson.com/bins/80zl0');

 fetch(request)
 .then(blobResponse => blobResponse.json())
 .then(response => {
     console.log('data is ', response);
     httpData = response.data;
     wordCloudModule.wordCloudGenerator({
         containerid: '.wordcloudcont',
         wordclouddata: httpData,
         stopwords: stopWords
     });
 })
 .catch(error => {
     console.error(error);
 });

}
