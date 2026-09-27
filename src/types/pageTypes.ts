export interface Page {
  uuid: string;
  id: string;
  location: string;
  photo?: Photo
}

export interface Photo {
  url: string;
  width: any;
  height: any;
}

export interface LessonPage extends Page {
  author: PersonPage;
}

export interface PersonPage extends Page {
  displayname: string;
  bio: string;
  relatedPages: Page[];
  role: string;
  organizationName: string;
}
