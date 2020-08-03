package com.lime.boardajax.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class MyController {
	
	@GetMapping(value = "/login")
	public String login(Model model) {
		return "Login";
	}

	@GetMapping(value = "/account")
	public String account(Model model) {
		return "Account";
	}

}
