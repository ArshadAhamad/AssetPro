import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeHubUserBlogComponent } from './knowledge-hub-user-blog.component';

describe('KnowledgeHubUserBlogComponent', () => {
  let component: KnowledgeHubUserBlogComponent;
  let fixture: ComponentFixture<KnowledgeHubUserBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeHubUserBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeHubUserBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
