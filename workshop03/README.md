all manifests are located in the ./resources dir

the manifests in the scratches dir are scratches created during class.

to check status of application's pods:
run
```shell
k run tmp --rm -it --image=curlimages/curl -nbggns -- curl -s http://bggapp-svc:5000/healthz
```
should expect:
```json
{"timestamp":1762934566080,"message":"Application is healthy"}
```