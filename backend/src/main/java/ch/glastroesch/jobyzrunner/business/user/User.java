package ch.glastroesch.jobyzrunner.business.user;

import ch.glastroesch.jobyzrunner.business.common.AbstractEntity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name = "User")
public class User extends AbstractEntity {

    @Column(name = "Username")
    private String username;

    @Column(name = "Passwort")
    private String password;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "jobTitle")
    private String jobTitle;

    @Column(name = "birthDate")
    private String  birthdate;


    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "age")
    private String age;

    @Column(name  = "description")
    private String description;

    @Column(name = "salary")
    @Enumerated(EnumType.STRING)
    private Salary salary;

    @Column(name = "expectedSalary")
    @Enumerated(EnumType.STRING)
    private Salary expectedSalary;

    @Column(name = "Experience")
    @Enumerated(EnumType.STRING)
    private Experience experience;

    @Column(name = "education")
    @Enumerated(EnumType.STRING)
    private Education education;

    @Column(name = "language")
    @Enumerated(EnumType.STRING)
    private Language language;

    @Column(name = "allowsearch")
    @Enumerated(EnumType.STRING)
    private Allowsearch allowsearch;

    public User() {
        // for jpa
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getfirstName() {
        return firstName;
    }

    public void setfirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getlastName() {
        return lastName;
    }

    public void setlastName(String lastName) {
        this.lastName = lastName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
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

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
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
