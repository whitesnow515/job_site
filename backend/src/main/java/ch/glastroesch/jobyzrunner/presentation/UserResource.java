package ch.glastroesch.jobyzrunner.presentation;

import ch.glastroesch.jobyzrunner.business.user.Profile;
import ch.glastroesch.jobyzrunner.business.user.Salary;
import ch.glastroesch.jobyzrunner.business.user.SalarySelection;
import ch.glastroesch.jobyzrunner.business.user.User;
import ch.glastroesch.jobyzrunner.business.user.UserRepository;
import ch.glastroesch.jobyzrunner.business.user.UserService;
import com.google.gson.Gson;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import static java.util.Arrays.asList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.text.SimpleDateFormat;
import ch.glastroesch.jobyzrunner.business.user.Experience;
import ch.glastroesch.jobyzrunner.business.user.ExperienceSelection;
import org.springframework.web.bind.annotation.PathVariable;
import ch.glastroesch.jobyzrunner.business.user.Allowsearch;
import ch.glastroesch.jobyzrunner.business.user.AllowsearchSelection;
import ch.glastroesch.jobyzrunner.business.user.Language;
import ch.glastroesch.jobyzrunner.business.user.LanguageSelection;

@RestController
@RequestMapping("/users")
public class UserResource {

    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @PostMapping
    public void createUser(@RequestBody String content) throws NoSuchAlgorithmException {

        Gson g = new Gson();
        User user = g.fromJson(content, User.class);

        userService.createUser(user);

    }

    @PostMapping("/login")
    public boolean loginUser(@RequestBody String content) throws NoSuchAlgorithmException {

        Gson g = new Gson();
        User user = g.fromJson(content, User.class);

        return userService.login(user);

    }

    @PostMapping("/profile")
    public void saveProfile(@RequestBody String content) {

        System.out.println("Save profile: ");

        Gson g = new Gson();
        Profile profile = g.fromJson(content, Profile.class);

        // ...

        User user = userRepository.getUser(profile.getUsername());
        user.setfirstName(profile.getFirstName());
        user.setlastName(profile.getLastName());
        user.setJobTitle(profile.getJobTitle());
        user.setSalary(profile.getSalary());
        user.setExpectedSalary(profile.getExpectedSalary());
        user.setAge(profile.getAge());
        user.setPhone(profile.getPhone());
        user.setEmail(profile.getEmail());
        user.setExperience(profile.getExperience());
        user.setDescription(profile.getDescription());
        user.setAllowSearch(profile.getAllowSearch());
        user.setLanguage(profile.getLanguage());

        /*
         * SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
         * String birthdateString = dateFormat.format(profile.getBirthdate());
         * user.setBirthdate(birthdateString);
         */

        userRepository.save(user);

    }

    @GetMapping("/profile/salaries")
    public List<SalarySelection> getSalaries() {

        List<Salary> salaries = asList(Salary.values());

        List<SalarySelection> selections = new ArrayList<>();
        for (Salary salary : salaries) {
            selections.add(new SalarySelection(salary.name(), salary.getText()));
        }

        return selections;

    }

    @GetMapping("/profile/experiences")
    public List<ExperienceSelection> getExperiences() {

        List<Experience> experiences = asList(Experience.values());

        List<ExperienceSelection> selections = new ArrayList<>();
        for (Experience experience : experiences) {
            selections.add(new ExperienceSelection(experience.name(), experience.getText()));
        }

        return selections;

    }

    @GetMapping("/profile/allowsearch")
    public List<AllowsearchSelection> getAllowsearch() {

        List<Allowsearch> allowsearch = asList(Allowsearch.values());

        List<AllowsearchSelection> selections = new ArrayList<>();
        for (Allowsearch allow : allowsearch) {
            selections.add(new AllowsearchSelection(allow.name(), allow.getText()));
        }

        return selections;
    }

    @GetMapping("/profile/languages")
    public List<LanguageSelection> getLanguageSelections() {

        List<Language> languages = asList(Language.values());

        List<LanguageSelection> selections = new ArrayList<>();
        for (Language language : languages) {
            selections.add(new LanguageSelection(language.name(), language.getText()));
        }

        return selections;
    }

    

    @GetMapping("/profiles/{username}")
    public Profile getProfile(@PathVariable String username) {
        User user = userRepository.getUser(username);
        Profile profile = new Profile();
        profile.setFirstName(user.getfirstName());
        profile.setLastName(user.getlastName());
        profile.setJobTitle(user.getJobTitle());
        profile.setSalary(user.getSalary());
        profile.setExpectedSalary(user.getExpectedSalary());
        profile.setAge(user.getAge());
        profile.setPhone(user.getPhone());
        profile.setEmail(user.getEmail());
        profile.setExperience(user.getExperience());
        profile.setDescription(user.getDescription());
        profile.setAllowSearch(user.getAllowSearch());
        profile.setLanguage(user.getLanguage());
        return profile;
    }

}
