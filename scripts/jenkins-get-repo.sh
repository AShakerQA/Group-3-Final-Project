 #! /bin/bash
cd /var/lib/jenkins/workspace/project3
if [ ! -d /var/lib/jenkins/workspace/project3/Group-3-Final-Project ]; then
   git clone https://github.com/AlasdairHanson/Group-3-Final-Project.git -b Dev
else 
   rm -rf Group-3-Final-Project
   git clone https://github.com/AlasdairHanson/Group-3-Final-Project.git -b Dev
fi




echo "Hello From Group3"
