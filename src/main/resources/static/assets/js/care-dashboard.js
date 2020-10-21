$(document).ready(function () {
	
	
	
	
});


function myFunction(disease) {
	
	console.log(disease);
	
	if(disease == 1) {
		
		$("#disease-name-heading").text("Covid-19");
		$("#disease-information").text("Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.");
		
		$("#symptoms-details").html("<p>The most common symptoms are:</p><ul><li><p>fever</p></li><li><p>cough</p></li><li><p>fatigue</p></li><li><p>shortness of breath</p></li></ul>");
	
		$("#prevention-details").html("<p>Follow the guidelines to help protect yourself from contracting and transmitting SARS-CoV-2 :</p><ul><li><p>Wash your hands frequently and carefully</p></li><li><p>Avoid touching your face</p></li><li><p>Stop shaking hands and hugging people</p></li><li> <p>Cover your mouth and nose when you cough and sneeze</p></li><ul>");
		
	}else if (disease == 2) {
		
		$("#disease-name-heading").text("Heart Disease");
		
		$("#disease-information").text("Heart disease is another of the prevalent diseases of old age. This can involve heart attacks, narrowing of the arteries of the heart that leads to pain in the chest (called angina) or heart muscle weakness called heart failure. Whatever the disorder may be, once heart disease sets in, it will be much more difficult for individuals to exercise and perform daily activities.");
		$("#symptoms-details").html("<p>Risk factors, such as high blood pressure , diabetes, high cholesterol and a family history of heart disease, are associated with heart disease. As a strong risk factor, smoking is also known. As these risk factors have been predominant for a number of years, it is almost unavoidable that some form of heart disease would occur in a large proportion of the elderly. This is generally a narrowing of the arteries that leads to chest pain or heart attacks.</p>");

		$("#prevention-details").html("<p>Fortunately, there are many things you can do to reduce your chances of getting heart disease:</p><ul><li><p><b>Control your blood pressure</b> High blood pressure is a major risk factor for heart disease</p></li><li><p><b>Keep your cholesterol and triglyceride levels under control.</b> High levels of cholesterol can clog your arteries and raise your risk of coronary artery disease and heart attack.</p></li><li><p><b>Stay at a healthy weight</b> Being overweight or having obesity can increase your risk for heart disease. This is mostly because they are linked to other heart disease risk factors, including high blood cholesterol and triglyceride levels, high blood pressure, and diabetes. Controlling your weight can lower these risks.</p></li><li><p><b>Get regular exercise</b> Exercise has many benefits, including strengthening your heart and improving your circulation.</p></li></ul>");
	
	}else if (disease == 5) {
		
		$("#disease-name-heading").text("Arthritis");
		$("#disease-information").text("In arthritis, there is inflammation in one or more joints. Depending on the underlying cause, arthritis is classified into various forms. Osteoarthritis ( OA) and rheumatoid arthritis ( RA) are the usual types of arthritis.");

		$("#symptoms-details").html("<p>Arthritis symptoms may occur unexpectedly or over a period of time. It is commonly seen in people over 65 years of age. In kids , teens and younger adults, however, it can also grow. Women are more vulnerable to arthritis than men, and overweight individuals are at increased risk as well. Among the signs of arthritis are:</p><ul><li><p>Joint pain</p></li><li><p>Stiffness in the joints</p></li><li><p>Swelling of the joints</p></li><li><p>Decreased range of motion</p></li><li><p>Redness of the skin around the joint</p></li><li>	<p>Symptoms may be worse in the morning after getting up from bed</p>	</li></ul>  ");
		
		$("#prevention-details").html("  <p>Arthritis requires mild to moderate lifestyle changes in addition to medical care to help the patient avoid complications and relieve the symptoms of the disease. The steps that will assist the patient to deal with arthritis include:</p> <ul><li><p><b>Maintaining a good weight</b> reduces the risk of OA and also reduces the symptoms of OA in patients who already have it.</p></li><li><p>A <b>diet rich in antioxidants</b> foods like fresh fruits, vegetables and herbs help to reduce inflammation. Other foods to reduce inflammation are fish and nuts, which are also helpful in relieving the symptoms of arthritis.</p></li><li><p><b>Minimize the intake of fried, processed foods</b> and high intake of meat. A doctor should be consulted if the patient wants to switch to a gluten-free diet to improve the symptoms of arthritis.</p>	</li></ul>  ");
		
		
	}
	console.log("hello...");
	$("#exampleModal").modal();

}

