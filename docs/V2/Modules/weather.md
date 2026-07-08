---
title: Weather
description: Weather module documentation
---

# Weather

The Weather module retrieves current weather conditions for a specified location using [WeatherAPI.com](https://www.weatherapi.com/) and exposes them to the ChatBox animation system and avatar parameters.

## Features

* Real-time weather data powered by [WeatherAPI.com](https://www.weatherapi.com/)
* Temperature in Celsius and Fahrenheit
* Humidity and weather condition information
* Weather condition codes for avatar integration

## Configuration

### Location Setting

Enter a location in the module settings. [WeatherAPI.com](https://www.weatherapi.com/) supports a wide range of formats:

* **City names**: `London`, `New York`, `Tokyo`
* **City and country**: `Paris, France` *(recommended for accuracy)*
* **Postcodes / ZIP codes**: `10001`, `SW1A 1AA`
* **Coordinates**: `51.5074,-0.1278`
* **IP lookup**: `auto:ip`
* **Airport codes**: `JFK`, `LHR`

For best results, use the `City, Country` format (for example, `Leeds, UK`) to avoid ambiguity.

## Available Variables

The Weather module exposes the following variables to the ChatBox animation system:

| Variable    | Type   | Description                                                             |
| ----------- | ------ | ----------------------------------------------------------------------- |
| `TempC`     | Number | Current temperature in Celsius                                          |
| `TempF`     | Number | Current temperature in Fahrenheit                                       |
| `Humidity`  | Number | Relative humidity percentage (`0-100`)                                  |
| `Condition` | String | Human-readable weather condition (for example, `Sunny` or `Light rain`) |

## Avatar Parameters

The Weather module can send data to your avatar through VRChat OSC parameters:

| Parameter Name        | Type | Description                             |
| --------------------- | ---- | --------------------------------------- |
| `VRCOSC/Weather/Code` | int  | Current weather condition code (`0-48`) |

## Weather Codes

The Weather module provides a weather condition code through `VRCOSC/Weather/Code`. These values are based on [WeatherAPI.com's condition codes](https://www.weatherapi.com/docs/weather_conditions.json), but remapped into a simplified `0-48` range.

You can use these codes to drive avatar behaviour, such as:

* Switching outfits for rain or snow
* Triggering weather-themed animations
* Enabling seasonal visual effects
* Reacting dynamically to current conditions

### Code Reference

| Code | Condition                        | Code | Condition                                |
| ---- | -------------------------------- | ---- | ---------------------------------------- |
| 0    | Unknown                          | 25   | Light freezing rain                      |
| 1    | Sunny/Clear                      | 26   | Moderate or heavy freezing rain          |
| 2    | Partly Cloudy                    | 27   | Light sleet                              |
| 3    | Cloudy                           | 28   | Moderate or heavy sleet                  |
| 4    | Overcast                         | 29   | Patchy light snow                        |
| 5    | Mist                             | 30   | Light snow                               |
| 6    | Patchy rain possible             | 31   | Patchy moderate snow                     |
| 7    | Patchy snow possible             | 32   | Moderate snow                            |
| 8    | Patchy sleet possible            | 33   | Patchy heavy snow                        |
| 9    | Patchy freezing drizzle possible | 34   | Heavy snow                               |
| 10   | Thundery outbreaks possible      | 35   | Ice pellets                              |
| 11   | Blowing snow                     | 36   | Light rain shower                        |
| 12   | Blizzard                         | 37   | Moderate or heavy rain shower            |
| 13   | Fog                              | 38   | Torrential rain shower                   |
| 14   | Freezing fog                     | 39   | Light sleet showers                      |
| 15   | Patchy light drizzle             | 40   | Moderate or heavy sleet showers          |
| 16   | Light drizzle                    | 41   | Light snow showers                       |
| 17   | Freezing drizzle                 | 42   | Moderate or heavy snow showers           |
| 18   | Heavy freezing drizzle           | 43   | Light showers of ice pellets             |
| 19   | Patchy light rain                | 44   | Moderate or heavy showers of ice pellets |
| 20   | Light rain                       | 45   | Patchy light rain with thunder           |
| 21   | Moderate rain at times           | 46   | Moderate or heavy rain with thunder      |
| 22   | Moderate rain                    | 47   | Patchy light snow with thunder           |
| 23   | Heavy rain at times              | 48   | Moderate or heavy snow with thunder      |
| 24   | Heavy rain                       |      |                                          |

### Example Usage

| Code Range            | Suggested Avatar Response       |
| --------------------- | ------------------------------- |
| `1-4`                 | Default or clear-weather outfit |
| `6`, `19-24`, `36-38` | Rain gear or umbrella           |
| `7`, `29-34`, `41-42` | Winter clothing                 |
| `10`, `45-48`         | Storm or lightning effects      |

### Day and Night Conditions

Some conditions use different text descriptions during the day and night. For example, `Sunny` may become `Clear` at night. The weather code itself does not change.

## ChatBox States

The Weather module provides the following state:

* **Default**: Active when weather data is available

Use this state in the ChatBox animation system to control when weather information is displayed.

## Troubleshooting

### Weather data not loading

* Verify the configured location is valid
* Try the `City, Country` format
* Check your internet connection
* Ensure [WeatherAPI.com](https://www.weatherapi.com/) is accessible from your network

### Weather code shows as `0`

A value of `0` means the weather service could not determine the current condition.

* Wait for the next automatic update
* Restart the Weather module
* Verify the configured location exists in WeatherAPI.com's database

### Location not found

* Double-check for typos
* Use the `City, Country` format
* Try coordinates if the location name is ambiguous

### Sunrise or sunset times seem incorrect

* Verify the configured location is accurate
* Coordinates provide the most precise results

## API Information

This module uses the free tier of [WeatherAPI.com](https://www.weatherapi.com/) to provide:

* Current weather conditions
* Astronomy data (sunrise and sunset)
* Weather condition codes

For additional information, see the [WeatherAPI.com documentation](https://www.weatherapi.com/docs/).

## Related Tutorials

* [Simple Weather Display](../tutorials/chatbox/weather.md) — Display weather information in your ChatBox
