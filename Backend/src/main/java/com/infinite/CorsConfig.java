package com.infinite;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
//CorsCongiguration to allow the cross origin policy
@Configuration
public class CorsConfig {
	
		

		 	@Bean
		    public CorsFilter corsFilter() {
		        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		        CorsConfiguration config = new CorsConfiguration(); //creating corsCongig reference
		        config.setAllowCredentials(true);
		config.addAllowedOrigin("http://localhost:3000"); // Replace with your React app's URL
		        config.addAllowedHeader("*"); //allowing headers
		        config.addAllowedMethod("*"); //alowing methods
		        config.setAllowCredentials(true);
		        config.addExposedHeader("Authorization");
		        source.registerCorsConfiguration("/**", config);
		        return new CorsFilter(source);
		    }

	}
