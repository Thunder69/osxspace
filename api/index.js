export default async function handler(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).send("id parameter required");
    }

    const url = `https://tgh-theta.vercel.app/?id=${id}`;

    const response = await fetch(url);
    let data = await response.text();

    // Remove credit पूरी तरह
    data = data.replace(/"credit":"@PHONER00T"/gi, "");

    // Ensure For Buy text always present
    if (!data.includes("For Buy @SxThunder")) {
      data = data + "\nFor Buy @SxThunder";
    }

    res.status(200).send(data);

  } catch (err) {
    res.status(500).send("Error: " + err.toString());
  }
}
