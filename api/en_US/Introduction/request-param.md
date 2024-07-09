---
title: "Request. 11"
slug: "request-param"
excerpt: "WaaS API Authentication"
hidden: true
createdAt: "Sun Mar 10 2024 02:34:04 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sun Mar 10 2024 07:03:04 GMT+0000 (Coordinated Universal Time)"
---
PassToPay API Key authentication requires each request to be signed except public API interfaces.

### HTTP HOST

- Development: <https://api.dev.cobo.com>
- Production: <https://api.custody.cobo.com>

### HTTP METHOD

POST or GET.

### Request parameters

Data should be formatted as application/json and encoded in UTF-8.

### Parameter specifications

- **Transaction amount**: The default is RMB transaction, the unit is cents, and the parameter value cannot contain decimals.
- **Time parameters**: All time parameters use 13-digit values ​​accurate to milliseconds, such as: 1622016572190. The timer specifically refers to the number of milliseconds from 00:00:00 GMT on January 1, 1970 to the present.
