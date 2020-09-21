class Article {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length === 1) {
      return `${this._likes[0]} likes this article!`;
    }
    return `${this._likes[0]} and ${
      this._likes.length - 1
    } others like this article!`;
  }

  like(username) {
    let userExist = this._likes.find((x) => x === username);
    if (userExist) {
      throw Error("You can't like the same article twice!");
    }
    if (username === this.creator) {
      throw Error("You can't like your own articles!");
    }
    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    let user = this._likes.find((x) => x === username);
    if (!user) {
      throw Error("You can't dislike this article!");
    }
    const index = this._likes.indexOf(username);
    this._likes.splice(index, 1);
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    let currentComment = this._comments.find((x) => x.id === id);
    if (id === undefined || !currentComment) {
      this._comments.push({
        id: this._comments.length + 1,
        username: username,
        content: content,
        replies: [],
      });
      return `${username} commented on ${this.title}`;
    } else {
      currentComment.replies.push({
        id: `${id}.${currentComment.replies.length + 1}`,
        username: username,
        content: content,
      });
      return `You replied successfully`;
    }
  }

  toString(sortingType) {
    let sortFunctions = {
      asc: (a, b) => {
        return a.id - b.id;
      },
      desc: (a, b) => {
        return b.id - a.id;
      },
      username: (a, b) => {
        return a.username.localeCompare(b.username);
      },
    };

    let sortTypeFunction = sortFunctions[sortingType];
    let resultString = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;
    let sortedComments = this._comments.slice().sort(sortTypeFunction);
    for (const comment of sortedComments) {
      resultString += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;
      let sortedReplies = comment.replies.sort(sortTypeFunction);
      for (const rep of sortedReplies) {
        resultString += `--- ${rep.id}. ${rep.username}: ${rep.content}\n`;
      }
    }
    return resultString.trim();
  }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));
