package com.spring.springbootfirstapp.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class Demo {

	@RequestMapping("/user")
	public String demoTest(HttpSession session, Model model) {

		return "care-dashboard";
	}

}
