# Task 1:

`Dockerfile` is located in main dir, ie `./Dockerfile`

# Task 2:

All defined resources are located in the `resource` dir, resources defined in
`scratches` dir were resources created following the class.

# Task 3:

In order to verify whether this is working, first change the container image and
deploy via:

`k apply -f resources/deploy.yml`

then while its performing the rolling upgrades, navigate to the external IP
address declared by the load balancer, and keep on hard refreshing, it should
serve either the first running application or the newly created applications.

To view previous rollouts, do: 
`k rollout history deploy/<DEPLOY-APP>`
and to rollback,  do:
`k rollout undo deploy/<DEPLOY-APP> --to-revision=<REVISION>`