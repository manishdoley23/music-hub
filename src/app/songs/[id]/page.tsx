import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SongPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  function getEmbedUrl(url: string): string {
    const urlObj = new URL(url);
    let videoId = "";

    if (urlObj.hostname === "www.youtube.com") {
      videoId = urlObj.searchParams.get("v") || "";
    } else if (urlObj.hostname === "youtu.be") {
      videoId = urlObj.pathname.slice(1);
    }

    const start = urlObj.searchParams.get("t") || "";
    return `https://www.youtube.com/embed/${videoId}?start=${start}&autoplay=1&mute=0&controls=1`;
  }

  return (
    <div className="h-screen w-full flex flex-col items-center py-10 sm:px-20 relative">
      <Link className="absolute top-5 left-10" href={"/songs"}>
        <Button variant={"link"}>Back</Button>
      </Link>
      <h1>Song {params.id}</h1>
      <div className="flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap justify-between items-center w-full">
        <Card className="h-[85vh] overflow-y-scroll">
          <CardHeader>
            <CardTitle>Sweet Child O&apos; Mine</CardTitle>
          </CardHeader>
          <CardContent>
            <pre
              className="tK8GG Ty_RP"
              style={{
                fontSize: "13px",
                fontFamily: "&apos; Roboto Mono', 'Courier New', monospace",
              }}
            >
              (Guitar Tuning: Eb, Ab, Db, Gb, Bb, eb or the equivalent with
              sharps)
              <br />
              <br />
              [Intro]
              <br />
              <br />|{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              | <span data-name="D">D</span> |{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              |{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              |{" "}
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>{" "}
              |{" "}
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>{" "}
              |{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |
              <br />|{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              |{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              |{" "}
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>{" "}
              |{" "}
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>{" "}
              |{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |
              <br />
              <br />
              [Verse 1]
              <br />
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              She&apos; s got a smile that it seems to me
              <br />
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>
              <br />
              Reminds me of childhood memories
              <br />
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>
              <br />
              Where everything
              <br />
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Was as fresh as a bright blue sky
              <br />
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Now and then when I see her face
              <br />
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>
              <br />
              She takes me away to that special place
              <br />
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>
              <br />
              And if I stared too long
              <br />
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              I&apos; d probably break down and cry
              <br />
              <br />
              [Chorus]
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Whoa oh, sweet child o&apos; mine
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Whoa, oh, oh, oh sweet love o&apos; mine
              <br />
              <br />
              [Instrumental]
              <br />|{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              |{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              |{" "}
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>{" "}
              |{" "}
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>{" "}
              |{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>{" "}
              |
              <br />
              <br />
              [Verse 2]
              <br />
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              She&apos; s got eyes of the bluest skies
              <br />
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>
              <br />
              As if they thought of rain
              <br />
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>
              <br />
              I&apos; d hate to look into those eyes and see an ounce of pain
              <br />
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Her hair reminds me of a warm safe place
              <br />
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>
              <br />
              Where as a child I&apos; d hide
              <br />
              <span
                data-name="G"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                G
              </span>
              <br />
              And pray for the thunder and the rain to quietly pass me by
              <br />
              <br />
              [Chorus]
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Whoa, oh, oh, sweet child o&apos; mine
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Whoa, oh, oh, oh, sweet love o&apos; mine
              <br />
              <br />
              [Outro]
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Whoa, oh, oh, oh sweet child o&apos; mine
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Whoa, oh, oh, oh sweet love o&apos; mine
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              Whoa, oh, oh, oh, sweet child o&apos; mine
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              <span
                data-name="A"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                A
              </span>{" "}
              <span
                data-name="C"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                C
              </span>{" "}
              <span
                data-name="D"
                className="fciXY _Oy28"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                D
              </span>
              <br />
              <br />
              [Instrumental]{"\n"}
              {"| D   | D   | C   | C   | G   | G   | D   | D   |"}
              {"\n"}
              {"| D   | D   | C   | C   | G   | G   | D   | D   |"}
              {"\n\n"}
              [Chorus]{"\n"}
              {"A               C              D"}
              {"\n"}
              {"Whoa oh, sweet child o' mine"}
              {"\n"}
              {"A               C              D"}
              {"\n"}
              {"Whoa, oh, oh, oh sweet love o' mine"}
              {"\n"}
              {"A               C              D"}
              {"\n"}
              {"Whoa oh, oh, oh sweet child o' mine"}
              {"\n"}
              {"A               C         D"}
              {"\n"}
              {"Ooooooooh sweet love o' mine"}
              {"\n\n"}
              [Solo Part 1]{"\n"}
              {"| Em    | C     | B7    | Am    |"}
              {"\n"}
              {"| Em    | C     | B7    | Am    |"}
              {"\n"}
              {"| Em    | C     | B7    | Am    |"}
              {"\n"}
              {"| Em    | C     | B7    | Am    | Am    |"}
              {"\n\n"}
              [Solo Part 2]{"\n"}
              {"| Em      | G       | A       | C   D G |"}
              {"\n"}
              {"| Em      | G       | A       | C   D G |"}
              {"\n"}
              {"| Em      | G       | A       | C   D G |"}
              {"\n"}
              {"| Em      | G       | A       | C   D G |"}
              {"\n\n"}
              [Outro]{"\n"}
              {"Em              G                   A                C  D G"}
              {"\n"}
              {"Where do we go, where do we go now, where do we go"}
              {"\n"}
              {
                "Em              G                      A                   C  D G"
              }
              {"\n"}
              {"Where do we go, where do we go now, oh where do we go now"}
              {"\n"}
              {"Em              G              A                   C  D G"}
              {"\n"}
              {"Where do we go,   sweet child, where do we go now"}
              {"\n"}
              {
                "Em                  G                 A                   C   D G"
              }
              {"\n"}
              {"Aih, aih, aih, aih, aih, aih, aih, oh where do we go now"}
              {"\n"}
              {"Em              G        A                  C   D G"}
              {"\n"}
              {"Where do we go,  ohhhhh, where do we go now"}
              {"\n"}
              {"Em            G       A                  C   D G"}
              {"\n"}
              {"Where do we gooooooo, where do we go now"}
              {"\n"}
              {
                "Em               G      A                  (Fill)                   Em"
              }
              {"\n"}
              {
                "Where do we goooo, ohhh where do we go now, now-now-now-now-now-now-now"
              }
              {"\n"}
              {"(Em)    G          A       C   D     E"}
              {"\n"}
              {"Sweet child, sweet chiiiiiiiiiild of mine"}
              {"\n\n"}
              [Fill]{"\n"}
              {"eb|-------------------|"}
              {"\n"}
              {"Bb|-------------------|"}
              {"\n"}
              {"Gb|-------------------|"}
              {"\n"}
              {"Db|-9--7--------------|"}
              {"\n"}
              {"Ab|-7--5--9--8--7--5--|"}
              {"\n"}
              {"Eb|-------7--6--5--3--|"}
              {"\n"}
              {"    \\   3   /\\   3   /"}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <iframe
            height={300}
            width={500}
            src={getEmbedUrl("https://www.youtube.com/watch?v=iWxMMWOmkNQ")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            className={`rounded-xl`}
          ></iframe>
        </Card>
      </div>
    </div>
  );
}
