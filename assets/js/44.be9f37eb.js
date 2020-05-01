(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{257:function(e,a,s){"use strict";s.r(a);var t=s(17),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"password-finder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#password-finder"}},[e._v("#")]),e._v(" Password Finder")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/lontivero/WasabiPasswordFinder",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wasabi Password Finder"),s("OutboundLink")],1),e._v(" is a tool for helping those who made a mistake typing the password during the wallet creation process.\nThis tool tries to find the password that decrypts the encrypted secret key stored in a given wallet file.")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#limitations"}},[e._v("Limitations")])]),s("li",[s("a",{attrs:{href:"#usage"}},[e._v("Usage")]),s("ul",[s("li",[s("a",{attrs:{href:"#windows"}},[e._v("Windows")])]),s("li",[s("a",{attrs:{href:"#linus-and-macos"}},[e._v("Linus and macOS")])])])])])]),s("p"),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),s("p",[e._v("Wasabi Wallet protects the encrypted secret key with the same technology used to protect paper wallets ("),s("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-38-password-protected-private-key"}},[e._v("BIP 38")]),e._v(") and for that reason, it is computationally infeasible to brute force the password using all the possible combinations. (assuming a secure password was chosen)\nIt is important to know that Wasabi Password Finder is not for breaking wallet passwords but for finding errors (typos) in an already known password.")],1),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),s("p",[e._v("To use Wasabi's command line tools on Windows you have to use "),s("code",[e._v("wassabeed.exe")]),e._v(" that is inside your "),s("code",[e._v("Program Files\\WasabiWallet")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"linus-and-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linus-and-macos"}},[e._v("#")]),e._v(" Linus and macOS")]),e._v(" "),s("p",[e._v("Use the "),s("code",[e._v("wassabee")]),e._v(" command.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ wassabee help findpassword\nusage: findpassword --wallet:WalletName --language:lang --numbers:[TRUE|FALSE] --symbold:[TRUE|FALSE]\n\nTries to find typing mistakes in the user password by brute forcing it char by char.\neg: ./wassabee findpassword --wallet:MyWalletName --numbers:false --symbold:true\n\n  -w, --wallet=VALUE         The name of the wallet file.\n  -s, --secret=VALUE         You can specify an encrypted secret key instead of wallet. Example of encrypted secret:\n                               6PYTMDmkxQrSv8TK4761tuKrV8yFwPyZDqjJafcGEiLBHiqBV6WviFxJV4\n  -l, --language=VALUE       The charset to use: en, es, it, fr, pt. Default=en.\n  -n, --numbers=VALUE        Try passwords with numbers. Default=true.\n  -x, --symbols=VALUE        Try passwords with symbolds. Default=true.\n  -h, --help                 Show Help\n")])])]),s("p",[e._v("For example, there is a wallet called "),s("code",[e._v("MagicalCryptoWallet.json")]),e._v(", the correct password is "),s("code",[e._v("pass")]),e._v(", but the user thinks it is "),s("code",[e._v("pasd")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ wassabee findpassword --wallet:MagicalCryptoWallet\nWARNING: This tool will display you password if it finds it. Also, the process status displays your wrong password chars.\n         You can cancel this by CTRL+C combination anytime.\n\nEnter password: pasd\n\n[##################################################################################                  ] 82% - ET: 00:00:15.4120338\n\nCompleted in 00:01:11.5134519\nSUCCESS: Password found: >>> pass <<<\n\n")])])]),s("p",[e._v("Note that you can also specify an encrypted secret instead of the wallet file.\nThis is useful if you lost your password for a Bitcoin wallet, other than Wasabi.")]),e._v(" "),s("p",[e._v("Note that for a 4 characters length password it took more than one minute to find.\nMoreover, the process is heavy in CPU and for that reason, it can be a good idea to use the best combination of parameters to reduce the search space.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("language")]),e._v(" (default: en) specify the charset (characters to search in) to reduce the search space.\nFor example, while the "),s("em",[e._v("Italian")]),e._v(' charset is "abcdefghimnopqrstuvxyzABCDEFGHILMNOPQRSTUVXYZ", the '),s("em",[e._v("French")]),e._v(' charset is "aâàbcçdæeéèëœfghiîïjkmnoôpqrstuùüvwxyÿzAÂÀBCÇDÆEÉÈËŒFGHIÎÏJKMNOÔPQRSTUÙÜVWXYŸZ".')])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("numbers")]),e._v(" (default: true) is for indicating that our password could contain at least one digit. This increases the charset by 10 (from 0 to 9).")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("symbols")]),e._v(' (default: true) is for indicating that our password could contain at least one symbol.\nThis increases the charset by 34 (|!¡@$¿?_-"#$/%&()´+*=[]{},;:.^`<>). Note that only the most commonly used characters are available.')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);