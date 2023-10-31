/****
 * --------------------------------
 *            MAKE API SECURE
 * --------------------------------
 * THE PERSON WHO SHOULD HAVE
 * 
 * Concepts:
 * 
 * 1. assign two tokens for each person (access token, refresh token)
 * 2. access token contains: user identification (email, role, etc). valid for a shorter duration
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh is invalid then logout the user
 * 
 * **/


/***
 * 1. jwt  ---> json web token
 * 2. generate a token by using jwt.sign
 * 3. create api set to cookie. http only, secure , same site
 * 4. from client side : axios withCredentials true
 * 5. cors setup origin and credentials: true
 * 
 * **/


/***
 * for secure  api calls 
 * 1. server side: install cookie parser  and use it as a middle ware
 * 2. req.cookies
 * 3. on client side: make api call using axios and withcredentials: true and credentials "include" when use fetch
 * 4.
 *  
 * 
 * **/