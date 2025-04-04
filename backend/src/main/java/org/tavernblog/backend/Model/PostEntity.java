package org.tavernblog.backend.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.time.OffsetDateTime;

@Entity
@Table(name = "posts")
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank(message = "Title cannot be empty")
    private String title;

    @Column(nullable = false)
    @NotBlank(message = "Body cannot be empty")
    private String body;

    @Column(nullable = false)
    @NotBlank(message = "Date cannot be empty")
    private OffsetDateTime created_at;

    public PostEntity() {}

    public PostEntity(String title, String body, OffsetDateTime created_at) {
        this.title = title;
        this.body = body;
        this.created_at = created_at;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBody() { return body; }
    public void setBody(String body) { this.body = body; }

    public OffsetDateTime getCreated_at() { return created_at; }
    public void setCreated_at(OffsetDateTime created_at) { this.created_at = created_at; }
}