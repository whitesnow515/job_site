package ch.glastroesch.jobyzrunner.business.file;

import ch.glastroesch.jobyzrunner.business.user.User;
import ch.glastroesch.jobyzrunner.business.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/files")
public class FileResource {
    
    @Autowired
    FileRepository fileRepository;
    @Autowired
    UserRepository userRepository;

    @PostMapping("/{username}/{filename}")
    public void addFile(@PathVariable String username, @PathVariable String filename, @RequestBody byte[] content) {
        
        User user = userRepository.getUser(username);
        
        File file = new File(filename, content);
        file.setUser(user);
        
        fileRepository.save(file);
        
        System.out.println("#### finished saving");

    }

}
