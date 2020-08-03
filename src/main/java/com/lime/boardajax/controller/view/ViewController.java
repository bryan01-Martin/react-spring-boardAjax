package com.lime.boardajax.controller.view;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
	
	@GetMapping(value = "/login")
	public String login(Model model) {
		return "Login";
	}

	@GetMapping(value = "/account")
	public String account(Model model) {
		return "Account";
	}

}
