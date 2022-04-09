# CarGuru



This repo is the frontend of the web application - CarGuru



![](https://github.com/KSDeng/cs5224-project/blob/master/images/logo2.png?raw=true)



CarGuru is a SaaS service that relies on Amazon Web Services to provide accurate second-hand car trading information. With the help of cloud technology, CarGuru is able to scale easily and utilize big data and machine learning techniques to evaluate cars and make precise recommendations with reliability, which enables users to decide with needed information and thus improves user experience. Focusing on the actual needs of individuals, CarGuru provides easy access to the second-hand car market that allows users to find objective second-hand car trading information without any struggles. 



The frontend is implemented using HTML, Javascript and CSS. 



## Deploy and start

1. Firstly, start an AWS EC2 instance, using AMI **ami-0801a1e12f4a9ccc0**. For how to start an AWS EC2 instance, see [AWS EC2 get started](https://aws.amazon.com/cn/ec2/getting-started/)

   **Be sure to give SSH, HTTP and HTTPS inbound rules to the security group of the instance.**

   ![](https://github.com/KSDeng/cs5224-project/blob/master/images/security-group-config.jpg?raw=true)

   

2. Log in to the running instance using *ssh*

   ```shell
   ssh -i path-to-the-key-file ec2-user@public-ipv4-address-of-the-instance
   ```



3. Run the following commands to install the software needed.

   ```shell
   sudo yum update
   sudo yum install git
   sudo yum install httpd
   ```



4. Clone this repo into the path `/var/www/html` using the following command

   ```shell
   git clone git@github.com:KSDeng/cs5224-project.git
   ```

   ![](https://github.com/KSDeng/cs5224-project/blob/master/images/project-path.jpg?raw=true)

   

5. Start apache server

   ```shell
   sudo service httpd start
   ```



6. Now access the url of the homepage `index.html`

   ```
   instance-public-ipv4-address/cs5224-project/index.html
   ```

​	![](https://github.com/KSDeng/cs5224-project/blob/master/images/homepage-screenshot.jpg?raw=true)

