package org.taverblog.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<PostEntity> getPosts() {
        return postRepository.findAll(user);
    }

    public PostEntity createPost(PostEntity post) {
        return postRepository.save(post);
    }

    public void deletePost(PostEntity post) {
        postRepository.delete(post);
    }
}