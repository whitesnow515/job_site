package ch.glastroesch.jobyzrunner.business.user;

import java.sql.Date;

public class Profile {

    private String username;
    private String firstname;
    private String lastname;
    private String phone;
    private String email;
    private String jobTitle;
    private String age;
    private String description;
    private Salary salary;
    private Salary expectedSalary;
    private Experience experience;
    private Education education;
    private Language language;
    private Allowsearch allowsearch;
    private Date birthdate;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstname;
    }

    public void setFirstName(String firstname) {
        this.firstname = firstname;
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

    public Salary getSalary() {
        return salary;
    }

    public void setSalary(Salary salary) {
        this.salary = salary;
    }

    public Salary getExpectedSalary() {
        return expectedSalary;
    }

    public void setExpectedSalary(Salary expectedSalary) {
        this.expectedSalary = expectedSalary;
    }

    public Experience getExperience() {
        return experience;
    }

    public void setExperience(Experience experience) {
        this.experience = experience;
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

    public Education getEducation() {
        return education;
    }

    public void setEducation(Education education) {
        this.education = education;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public Allowsearch getAllowSearch() {
        return allowsearch;
    }

    public void setAllowSearch(Allowsearch allowsearch) {
        this.allowsearch = allowsearch;
    }
}
