@echo off

IF NOT EXIST %AppData%\Zero (
    mkdir %AppData%\Zero
)

IF NOT EXIST %AppData%\ZeroParams (
    mkdir %AppData%\ZeroParams
)

IF NOT EXIST %AppData%\Zero\zero.conf (
   (
    echo addnode=mainnet.z.cash 
    echo rpcuser=username 
    echo rpcpassword=password%random%%random%
    echo daemon=1 
    echo showmetrics=0 
    echo gen=0 
) > %AppData%\Zero\zero.conf
) 
