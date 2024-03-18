package ch.glastroesch.jobyzrunner.business.companyprofil;

import java.sql.Date;

public class Profile {

    private String username;
    private String companyname;
    private String lastname;
    private String phone;
    private String email;
    private String jobTitle;
    private String age;
    private String description;
    private Date birthdate;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getCompanyName() {
        return companyname;
    }

    public void setCompanyName(String companyname) {
        this.companyname = companyname;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastName) {
        this.lastname = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthDate(Date birthdate) {
        this.birthdate = birthdate;
    }


    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
