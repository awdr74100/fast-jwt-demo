import { createSigner } from "fast-jwt";

async function test() {
  const signWithPromise = createSigner({ key: async () => "secret" });

  const token = await signWithPromise({ a: 1, b: 2, c: 3 });
}
