import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-munster',
    templateUrl: 'munster.page.html',
    styleUrls: ['munster.page.scss'],
})
export class MunsterPage {
    counties: string[] = ['Clare', 'Cork', 'Kerry', 'Limerick', 'Tipperary', 'Waterford'];
    selectedCounty: string | null = null;
    weatherData: any;

    constructor(private http: HttpClient) {}

   
    getWeatherForCounty(county: string): void {
        const apiKey = '75b1ebb0a3c7bf41046d2d8ee52c9232';
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

        const queryParams = {
            q: `${county},IE`,
            appid: apiKey,
            units: 'metric',
        };

        this.http.get<any>(baseUrl, { params: queryParams }).subscribe(
            (response) => {
                this.weatherData = response;
                this.selectedCounty = county;
            },
            (error) => {
                console.error(`Error fetching weather data for ${county}:`, error);
                alert(`Failed to fetch weather data for ${county}. Please try again later.`);
            }
        );
    }

 
    formatTimestamp(timestamp: number): string {
        const date = new Date(timestamp * 1000);
        const options: Intl.DateTimeFormatOptions = {
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true, 
        };
        return date.toLocaleTimeString('en-IE', options);
    }
}
