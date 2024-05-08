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
        const apiKey = 'your-api-key'; 
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        const queryParams = {
            q: `${province},IE`,
            appid: apiKey,
            units: 'metric',
        };

        this.http.get<any>(baseUrl, { params: queryParams }).subscribe(
            (response: any) => {
                console.log(`Weather data for ${province}:`, response);
                // Handle the response as needed
            },
            (error: any) => {
                console.error('Error fetching weather data:', error);
            }
        );
    }

    // Fetch weather data for each province
    fetchWeatherData(): void {
        const provinces = ['Galway', 'Dublin', 'Cork', 'Belfast']; // List of provinces
        for (const province of provinces) {
            this.getWeatherData(province);
        }
    }

    // Handle the "Log In" button click event
    promptForName(): void {
        const name = prompt('Please enter your name:');
        if (name) {
            this.greeting = `Hello, ${name}`;
        }
    }

    // Handle the "Create Account" button click event
    handleCreateAccountClick(): void {
        // Navigate to the create account page
        this.router.navigate(['/create-account']);
    }
}
