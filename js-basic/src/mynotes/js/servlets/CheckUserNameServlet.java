package mynotes.js.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CheckUserNameServlet extends HttpServlet{
	
	String[] usernames={"jane","jake","sam"};
	boolean isPresent=false;
	String message;
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		isPresent=false;
		String input=request.getParameter("username");
		System.out.println(input);
		
		for (int i = 0; i < usernames.length; i++) {
			if(usernames[i].equalsIgnoreCase(input)){
				isPresent=true;
				break;
			}
		}
		System.out.println(isPresent);
		if(isPresent){
			message="Username is not available";
		}else{
			message="Username is available";
		}
		 // Set response content type
	      response.setContentType("text/html");

	      // Actual logic goes here.
	      PrintWriter out = response.getWriter();
	      out.println(message);
	}

}
