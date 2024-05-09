import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-leinster',
    templateUrl: 'leinster.page.html',
    styleUrls: ['leinster.page.scss'],
})
export class LeinsterPage {
    // List of counties in Leinster
    counties: string[] = ['Carlow', 'Dublin', 'Kildare', 'Kilkenny', 'Laois', 'Longford', 'Louth', 'Meath', 'Offaly', 'Westmeath', 'Wexford', 'Wicklow'];

    selectedCounty: string | null = null;
    weatherData: any;

    constructor(private http: HttpClient) {}

    // Method to fetch weather data for a specific county
    getWeatherForCounty(county: string): void {
        const apiKey = '75b1ebb0a3c7bf41046d2d8ee52c9232'; // Your API key
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
