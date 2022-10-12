interface BookmarksInterface {
  list: string[];
  first(): string | undefined;
  last(): string | undefined;
  add(arg0: string): void;
  remove(arg0: string | true): void;
}

class Bookmarks implements BookmarksInterface {
  list: string[];
  constructor() {
    this.list = [];
  }

  first(): string | undefined {
    return this.list[0];
  }

  last(): string | undefined {
    return this.list[this.list.length - 1];
  }

  add(url: string): void {
    this.list.push(url);
  }

  remove(urlOrAll: string | true): void {
    if (urlOrAll === true) {
      this.list = [];
    } else {
      this.list = this.list.filter((bookmark) => bookmark !== urlOrAll);
    }
  }
}

const favorites = new Bookmarks();

function createLink(bookmark: string | undefined) {
  if (!bookmark) {
    return "";
  }
  return `<a href="${bookmark}">${bookmark.substring(
    bookmark.indexOf("//") + 2
  )}</a>`;
}

favorites.add("http://wp.pl");
const firstLink = favorites.first();
console.log(createLink(favorites.first()));
favorites.remove("http://wp.pl");
console.log(createLink(favorites.first()));
favorites.add("http://wp.pl");
favorites.add("http://onet.pl");
favorites.remove(true); // This should remove all
console.log("This should be true if list is empty", !favorites.first());
