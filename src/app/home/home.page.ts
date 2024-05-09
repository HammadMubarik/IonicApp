import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    providers: [DatePipe],
})
export class HomePage implements OnInit {
    currentDate: string | null = null;
    greeting: string = 'Log In'; 

    constructor(
        private http: HttpClient,
        private datePipe: DatePipe,
        private router: Router,
       
    ) {}

    ngOnInit(): void {
       
        this.updateCurrentDate();
        this.fetchWeatherData();

       
    }

  
    updateCurrentDate(): void {
        const now = new Date();
        this.currentDate = this.datePipe.transform(now, 'fullDate');
    }

   
    getWeatherData(province: string): void {
        const apiKey = '75b1ebb0a3c7bf41046d2d8ee52c9232'; 
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        const queryParams = {
            q: `${province},IE`,
            appid: apiKey,
            units: 'metric',
        };

        this.http.get<any>(baseUrl, { params: queryParams }).subscribe(
            (response: any) => {
                console.log(`Weather data for ${province}:`, response);
            },
            (error: any) => {
                console.error('Error fetching weather data:', error);
            }
        );
    }

    // this function fetches weather date for specific counties 
    fetchWeatherData(): void {
        const provinces = ['Galway', 'Dublin', 'Cork', 'Belfast']; 
        for (const province of provinces) {
            this.getWeatherData(province);
        }
    }

    // this function promps the user to enter the name after they enter it, it adds a " hello " + their name to the top of the page
    promptForName(): void {
        const name = prompt('Please enter your name:');
        if (name) {
            this.greeting = `Hello, ${name}`;
        }
    }


}
