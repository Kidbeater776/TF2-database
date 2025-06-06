import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.sql.*;

import java.net.InetSocketAddress;
import java.util.Map;

//Use for windows
//javac -cp sqlite-jdbc-3.23.1.jar; Main.java
class Main {

 public static void main(String[] args)throws IOException{
    (new Main()).init();
  }


  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init() throws IOException{
   

    // create a port - our Gateway
    int port = 2507;
      
    //create the HTTPserver object
    HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

    // create the database object
    Database db = new Database("jdbc:sqlite:Titanfall2.db");
    
    
  
    server.createContext("/", new RouteHandler("You are connected, but route not given or incorrect....") );

    // Add your routes here....
    String sql  = "";
	sql = "Select * from player";
    server.createContext("/player", new RouteHandler(db,sql) );
	sql = "Select * from pilots";
    server.createContext("/pilots", new RouteHandler(db,sql) );
	sql = "Select * from titans";
    server.createContext("/titans", new RouteHandler(db,sql) );
	sql = "Select * from maps";
    server.createContext("/maps", new RouteHandler(db,sql) );
    
     
      
    //Start the server
    server.start();
    System.out.println("Server is listening on port "+port);
       
      
    }    
}


