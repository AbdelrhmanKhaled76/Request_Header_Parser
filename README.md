# Request Header Parser Microservice
A backend API project built for the FreeCodeCamp Backend Development and APIs Certification. Parses request headers to return client IP address, language, and software information.

Features
Endpoint: GET /api/whoami

Returns JSON response containing:

ipaddress: Client's IPv4/IPv6 address

language: Client's preferred language (from Accept-Language header)

software: Client's operating system (from User-Agent header)
