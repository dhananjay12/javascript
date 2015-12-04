package mynotes.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mynotes.model.RegistrationModel;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class RegistrationServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String loginData = request.getParameter("registrationData");
		Gson gson = new Gson();
		RegistrationModel registrationModel = gson.fromJson(loginData,
				RegistrationModel.class);
		System.out.println("Fname=>" + registrationModel.getFname());
		System.out.println("lname=>" + registrationModel.getLname());
		System.out.println("email=>" + registrationModel.getEmail());

		String dateString = registrationModel.getDateOfBirth();
		System.out.println("dateString=>" + registrationModel.getDateOfBirth());
		DateFormat formatter = new SimpleDateFormat("MM/DD/yyyy");
		boolean isEligible = false;
		final Calendar c = Calendar.getInstance();
		try {
			c.setTime(formatter.parse(dateString)); 
			System.out.println(c.get(Calendar.YEAR));
			if (c.get(Calendar.YEAR) <= 2000) {
				isEligible = true;
			}
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("isEligible=>"+isEligible);
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		response.setHeader("Cache-control", "no-cache, no-store");
		response.setHeader("Pragma", "no-cache");
		response.setHeader("Expires", "-1");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST,GET");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Access-Control-Max-Age", "86400");
		JsonObject myObj = new JsonObject();
		if (isEligible) {
			myObj.addProperty("success", true);
			myObj.addProperty("message", "Cograts registration success!");
		} else {
			myObj.addProperty("success", false);
			myObj.addProperty("message", "Sorry!, Not Eligible");
		}

		out.println(myObj.toString());
		out.close();

	}

}
