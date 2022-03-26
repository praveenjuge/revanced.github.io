export const get = async () => {
  const files = import.meta.glob("./**/*.md");

  const docs = await Promise.all(
    Object.entries(files).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return { meta: metadata, path: `/docs/${path.slice(2, -3)}` };
    })
  );

  return { body: docs };
};
