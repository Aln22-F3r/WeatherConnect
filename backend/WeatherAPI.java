package backend;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class WeatherAPI {
    public static void main(String[] args) {
        String apiKey = "5f1afc54ccc5cec288756eb86a9f518b";
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingresa la Latitud");
        String lat = scanner.nextLine();

        System.out.println("Ingresa la Longitud");
        String lon = scanner.nextLine();
        String urlString = "https://api.openweathermap.org/data/2.5/weather?lat="
                + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric&lang=es";
        try {
            URL url = new URL(urlString);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int status = connection.getResponseCode();
            if (status == 200) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder content = new StringBuilder();
                while ((inputLine = in.readLine()) != null) {
                    content.append(inputLine);
                }
                in.close();
                connection.disconnect();

                System.out.println("Datos JSON recibidos: ");
                System.out.println(content.toString());
            } else {
                System.out.println("Error al conectar: " + status);
            }
        } catch (Exception e) {
            System.out.println("Error: ");
            e.printStackTrace();
        }
        scanner.close();
    }
}
