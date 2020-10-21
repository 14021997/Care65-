package com.spring.springbootfirstapp.dao.entities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TestRun {

	@Autowired
	private ProductService service;

	@RequestMapping("/")
	public String indexPage() {

		return "care-dashboard.html";

	}

	@RequestMapping(value = "/save", method = RequestMethod.GET)
	public String saveProduct(@RequestBody ProductRequest productRequest) {

		Product product2 = new Product();
		product2.setBrand("HDFC");
		product2.setMadein("IND");
		product2.setName("HOME");
		product2.setPrice(1233344);

		service.save(product2);

		return "redirect:/";
	}

}
