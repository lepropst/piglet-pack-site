import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { ConnectingAirportsOutlined } from '@mui/icons-material';

const postsDirectory = path.resolve(process.cwd(), 'content');

const getDirectories = (source: string) => {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

export function getContentDirectories(): string[] | false {
  let flies: string[] | false = getDirectories(postsDirectory);
  return flies;
}
export function getContent(props: {
  directory: string;
  filename?: string;
  fields: string[];
}) {
  const { directory, filename } = props;
  const fullPath = path.resolve(postsDirectory, directory);
  if (filename) {
    return returnFileContents(fullPath, filename, props.fields);
  } else {
    const files = fs.readdirSync(fullPath);
    const posts = files.map((file) =>
      returnFileContents(fullPath, file, props.fields)
    );
    return posts;
  }
}
function returnFileContents(
  fullPath: string,
  filename: string,
  fields: string[]
) {
  const realSlug = filename.replace(/\.md$/, '');
  const fileContents = fs.readFileSync(
    path.resolve(fullPath, `${realSlug}.md`),
    'utf8'
  );

  const { data, content } = matter(fileContents);
  type Items = {
    [key: string]: string;
  };
  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });
  console.log(fields);
  return items;
}
