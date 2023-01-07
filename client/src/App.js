import {
  ChakraProvider,
  Heading,
  Container,
  Text,
  Input,
  Button,
  Wrap,
  Stack, 
  Image,
  Link,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [image, updateImage] = useState();
  const [prompt, updatePrompt] = useState();
  const [loading, updateLoading] = useState();
  const [error, updateError] = useState();

  const generate = async (prompt) => {
    updateLoading(true);
    updateError(null); // clear any previous errors
    try {
      const result = await axios.get(`http://127.0.0.1:8000/?prompt=${prompt}`);
      updateImage(result.data);
    } catch (error) {
      updateError(error.message);
    }
    updateLoading(false);
  };

  return (
    <ChakraProvider>
      <Container>
        <Heading>Stable DIffusion🚀</Heading>
        <Text marginBottom={"10px"}>
          This react application leverages the model trained by Stability AI and
          Runway ML to generate images using the Stable Diffusion Deep Learning
          model. The model can be found via github here{" "}
          <Link href={"https://github.com/CompVis/stable-diffusion"}>
            Github Repo
          </Link>
        </Text>

        <Wrap marginBottom={"10px"}>
          <Input
            value={prompt}
            onChange={(e) => updatePrompt(e.target.value)}
            width={"350px"}
          ></Input>
          <Button onClick={(e) => generate(prompt)} colorScheme={"yellow"} isLoading={loading}>
            Generate
          </Button>
        </Wrap>

        {error && (
          <Text color="red.500">{error}</Text>
        )}

        {loading ? (
          <Spinner size="xl" />
        ) : image ? (
          <Image src={`data:image/png;base64,${image}`} boxShadow="lg" />
        ) : null}
      </Container>
    </ChakraProvider>
  );
};

export default App;
