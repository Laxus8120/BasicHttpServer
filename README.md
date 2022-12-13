# HOW TO BUILD HTTP BASIC SERVER 
----------------------------------------------------------------------------------------------------
    //using http module (inbuilt given by node) we can setup a basic server


/**
 * Http module contains a function called as createServer

        -const http = require('http');

 * this createServer function takes a callback as the input
 * Now inside the callback, we get two arguments
 *  - request -> this argument contains all the details about the incoming req
 *  - response -> this argument contains functions using which we can prepare the responses
 * 
 * the createServer function returns us the server object
 */

 # TYPES OF HTTP METHODS 

 HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs.
 Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be
 safe(An HTTP method is safe if it doesn't alter the state of the server. In other words, a method is safe if it leads to a read-only  operation.),
 idempotent(An HTTP method is idempotent if the intended effect on the server of making a single request is the same as the effect of making several identical requests.),
 or cacheable(A cacheable response is an HTTP response that can be cached, that is stored to be retrieved and used later, saving a new request to the server.).

 # GET
The GET method requests a representation of the specified resource. Requests using GET should only retrieve or Read the  data.

 # HEAD
The HEAD method asks for a response identical to a GET request, but without the response body.

 # POST
The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

 # PUT
The PUT method replaces all current representations of the target resource with the request payload.

 # DELETE
The DELETE method deletes the specified resource.

 # CONNECT
The CONNECT method establishes a tunnel to the server identified by the target resource.

 # OPTIONS
The OPTIONS method describes the communication options for the target resource.

 # TRACE
The TRACE method performs a message loop-back test along the path to the target resource.

 # PATCH
The PATCH method applies partial modifications to a resource.


 # LIMITATION OF USING THIS TYPE OF HTTP CREATION 

* NOTE - these req and response parameter are so powerful than you can manipulate any req and manupulate any ooutgoing response , everything you can control 
* but there is problem we have to do so many things our self  for e.g we are recieving the req.method(GET,POST ETC) and now for waht  method 
 * we have to manulally configure it, but without any third party libraray we can setup a basic server we can many more thing with this 
* but what if we use something which is already does so many thing for us already and for that only we gonna talk about express js 
* which going to do same thing we done already in a more simple way.