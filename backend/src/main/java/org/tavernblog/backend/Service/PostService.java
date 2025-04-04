package org.tavernblog.backend.Service;

import org.tavernblog.backend.Model.PostEntity;
import org.tavernblog.backend.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<PostEntity> getPosts() {
        return postRepository.findAll();
    }

    public PostEntity createPost(PostEntity post) {
        return postRepository.save(post);
    }

    public void deletePost(PostEntity post) {
        postRepository.delete(post);
    }
}