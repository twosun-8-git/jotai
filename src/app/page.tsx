import Link from "next/link";

export default function Page() {
  return (
    <div className="container index">
      <div className="nav">
        <dl>
          <dt>
            <Link href="./basic">/basic</Link>
          </dt>
          <dd>Jotai の基本的な使い方</dd>
        </dl>
        <dl>
          <dt>
            <Link href="./write-read">/write-read</Link>
          </dt>
          <dd>Write only, Read only の使い方</dd>
        </dl>
        <dl>
          <dt>
            <Link href="./creator">/creator</Link>
          </dt>
          <dd>Atom Creator の使い方</dd>
        </dl>
        <dl>
          <dt>
            <Link href="./params">/params</Link>
          </dt>
          <dd>jotai-locationで URL のクエリ取得</dd>
        </dl>
      </div>
    </div>
  );
}
