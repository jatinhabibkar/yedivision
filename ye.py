import pyrebase
from flask import Flask,render_template

config={

}
firebase = pyrebase.initialize_app(config)
db=firebase.database()

#imopotant
subject=db.child("subjects").get()
resultsubject=subject.val()
subject_dict={}
subject_list=[]
for i in range(len(resultsubject)):
    subject_dict[resultsubject[i]["subjectname"]]=i

for i in range(len(resultsubject)):
    subject_list.append(resultsubject[i]["subjectname"])
#important
app=Flask(__name__)
@app.route("/",methods=['GET','DELETE'])
def index():

    def the_fun_to_replace_subjectname(data):
        for i in data:
            data[i]["subjectname"]=subject_dict[data[i]["subjectname"]]

    assignment=db.child("assignmentsofsem5").get()
    result=assignment.val()
    the_fun_to_replace_subjectname(result)


    questionpaperdb=db.child("papersofsem5").get()
    result1=questionpaperdb.val()
    the_fun_to_replace_subjectname(result1)

    studymaterialdb=db.child("studymaterialsofsem5").get()
    result2=studymaterialdb.val()
    the_fun_to_replace_subjectname(result2)


    finalresult={"result":result,"result1":result1,"result2":result2,"subject_list":subject_list}
    
    return render_template("index.html",posts=finalresult) 

if __name__=="__main__":
    app.run()
