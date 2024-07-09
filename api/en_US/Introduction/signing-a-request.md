---
title: "Request Signing"
slug: "signing-a-request"
excerpt: "✍️ Protecting your sensitive data"
hidden: false
createdAt: "Fri Mar 08 2024 15:41:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Mar 20 2024 12:58:55 GMT+0000 (Coordinated Universal Time)"
---
### Checking a Api Signature

You can generate a signature of the  server-side and add it to request body. If the signature is provided, we'll check the validity the request to make sure it has not been altered. If the signature is invalid for any reason the request will fail to handle.

You can find and set your private key in the Merchant Background -> Merchant Center -> Application Management.

PassToPay generates signatures using a hash-based message authentication code (HMAC) with MD5.

**Step 1: **  Sort Parameters and Concatenate   

- Sort non-empty parameter values in ascending order of ASCII code of parameter names.
- Concatenate parameters in URL key-value pair format into a string .
- Parameter names are case-sensitive.

**example**: key1=value1&key2=value2&key3=value3

**Step 2**: Generate Signature

- Concatenate StringA with "&key=" and private key to get stringSignTemp.
- Calculate MD5 hash of stringSignTemp.
- Convert the resulting hash to uppercase to get the signature value signValue.

```javascript example
StringA = "key1=value1&key2=value2&key3=value3"
privateKey = "your_private_key"
stringSignTemp = StringA + "&key=" + privateKey
signValue = MD5(stringSignTemp).toUpperCase()

```

**Step 3**: Include Signature in Request 

Add the generated signature value (signValue) to the "**sign**" field in the request..

```json Final Result Example
{
  "amount": 1,
  "mchOrderNo": "mho1694051705945",
  "subject": "Commodity Title",
  "wayCode": "ALI_BAR",
  "sign": "924065BA077FA461A9B06D2E76E9ED3C",
  "reqTime": "1694051706",
  "body": "Commodity Description",
  "version": "1.0",
  "channelExtra": "{"authCode":"284957415846666792"}",
  "appId": "6447428682ca7458118af79f",
  "clientIp": "192.166.1.132",
  "notifyUrl": "https://www.jeequan.com",
  "signType": "MD5",
  "currency": "CNY",
  "mchNo": "M1682391685"
}

```

Here is sample code for signing various language implementations as a reference:

```java
public class SignatureGenerator {
    private static final String ENCODING_CHARSET = "UTF-8";

    public static void main(String[] args) {
        Map<String, String> parameters = new HashMap<>();
        parameters.put("key1", "value1");
        parameters.put("key2", "value2");
        parameters.put("key3", "value3");
        // Add more parameters 
        String signature = generateSignature(parameters);
        System.out.println("Generated Signature: " + signature);
    }

    public static String generateSignature(Map<String, String> parameters) {
        ArrayList<String> list = new ArrayList<>(parameters.size());
        for (Map.Entry<String, String> entry : parameters.entrySet()) {
            if (entry.getValue() != null && !entry.getValue().isEmpty()) {
                list.add(entry.getKey() + "=" + entry.getValue() + "&");
            }
        }
        list.sort(String.CASE_INSENSITIVE_ORDER);
        StringBuilder sb = new StringBuilder();
        for (String element : list) {
            sb.append(element);
        }
        String result = sb.toString();
        result += "key=" + getSecretKey();
        result = computeMD5(result, ENCODING_CHARSET).toUpperCase();
        return result;
    }

    private static String getSecretKey() {
        return "your_secret_key";
    }

    private static String computeMD5(String value, String charset) {
        try {
            byte[] data = value.getBytes(charset);
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] digestData = md.digest(data);
            StringBuilder sb = new StringBuilder();
            for (byte b : digestData) {
                int current = b & 0xff;
                if (current < 16) {
                    sb.append("0");
                }
                sb.append(Integer.toString(current, 16));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            e.printStackTrace();
            return null;
        }
    }
}
```
```php
<?php

class SignatureGenerator {
    private const ENCODING_CHARSET = "UTF-8";

    public static function main() {
        $parameters = array(
            "key1" => "value1",
            "key2" => "value2",
            "key3" => "value3"
            // Add more parameters
        );
        $signature = self::generateSignature($parameters);
        echo "Generated Signature: " . $signature . "\n";
    }

    public static function generateSignature($parameters) {
        $list = array();
        foreach ($parameters as $key => $value) {
            if (!empty($value)) {
                $list[] = $key . "=" . $value . "&";
            }
        }
        sort($list, SORT_STRING | SORT_FLAG_CASE);
        $result = implode("", $list);
        $result .= "key=" . self::getSecretKey();
        $result = strtoupper(md5($result));
        return $result;
    }

    private static function getSecretKey() {
        return "your_secret_key";
    }
}

SignatureGenerator::main();

?>
```
```javascript
class SignatureGenerator {
    static ENCODING_CHARSET = "UTF-8";

    static main() {
        const parameters = {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3"
            // Add more parameters
        };
        const signature = SignatureGenerator.generateSignature(parameters);
        console.log("Generated Signature: " + signature);
    }

    static generateSignature(parameters) {
        const list = [];
        for (const [key, value] of Object.entries(parameters)) {
            if (value !== null && value !== "") {
                list.push(key + "=" + value + "&");
            }
        }
        list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "case" }));
        let result = list.join("");
        result += "key=" + SignatureGenerator.getSecretKey();
        result = SignatureGenerator.computeMD5(result).toUpperCase();
        return result;
    }

    static getSecretKey() {
        return "your_secret_key";
    }

    static computeMD5(value) {
        const crypto = require("crypto");
        const md5 = crypto.createHash("md5");
        md5.update(value, SignatureGenerator.ENCODING_CHARSET);
        return md5.digest("hex");
    }
}

SignatureGenerator.main();
```
```python
import hashlib

class SignatureGenerator:
    ENCODING_CHARSET = "UTF-8"

    @staticmethod
    def main():
        parameters = {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3"
            # Add more parameters
        }
        signature = SignatureGenerator.generate_signature(parameters)
        print("Generated Signature: " + signature)

    @staticmethod
    def generate_signature(parameters):
        list = []
        for key, value in parameters.items():
            if value is not None and value != "":
                list.append(key + "=" + value + "&")
        list.sort(key=str.casefold)
        result = "".join(list)
        result += "key=" + SignatureGenerator.get_secret_key()
        result = SignatureGenerator.compute_md5(result).upper()
        return result

    @staticmethod
    def get_secret_key():
        return "your_secret_key"

    @staticmethod
    def compute_md5(value):
        md5_hash = hashlib.md5()
        md5_hash.update(value.encode(SignatureGenerator.ENCODING_CHARSET))
        return md5_hash.hexdigest()

SignatureGenerator.main()
```
```go
package main

import (
	"crypto/md5"
	"fmt"
	"sort"
	"strings"
)

func main() {
	parameters := map[string]string{
		"key1": "value1",
		"key2": "value2",
		"key3": "value3",
		// Add more parameters
	}
	signature := generateSignature(parameters)
	fmt.Println("Generated Signature:", signature)
}

func generateSignature(parameters map[string]string) string {
	list := make([]string, 0, len(parameters))
	for key, value := range parameters {
		if value != "" {
			list = append(list, key+"="+value+"&")
		}
	}
	sort.Strings(list)
	result := strings.Join(list, "")
	result += "key=" + getSecretKey()
	result = computeMD5(result)
	return result
}

func getSecretKey() string {
	return "your_secret_key"
}

func computeMD5(value string) string {
	hash := md5.Sum([]byte(value))
	return fmt.Sprintf("%x", hash)
}
```
