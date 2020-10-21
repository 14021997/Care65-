package com.spring.springbootfirstapp.dao.entities;

public class ProductRequest {

	private String brand;
	private String Name;
	private String madein;
	private float price;

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getMadein() {
		return madein;
	}

	public void setMadein(String madein) {
		this.madein = madein;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ProductRequest [brand=");
		builder.append(brand);
		builder.append(", Name=");
		builder.append(Name);
		builder.append(", madein=");
		builder.append(madein);
		builder.append(", price=");
		builder.append(price);
		builder.append("]");
		return builder.toString();
	}

}
