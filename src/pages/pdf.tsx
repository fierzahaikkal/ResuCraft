import { resumeAtom } from "@/lib/atom";
import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useAtom } from "jotai";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "black",
  },
  content: {
    fontSize: 12,
    marginBottom: 5,
    marginRight: 10,
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

const ResumePDF = () => {
  const [resume] = useAtom(resumeAtom);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 5,
          }}
        >
          {resume.name}
        </Text>
        <View style={styles.section}>
          <View style={styles.contact}>
            <Text style={styles.content}>{resume.email}</Text>
            <Text style={styles.content}>{resume.phone}</Text>
            <Text style={styles.content}>{resume.address}</Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.heading}>Summary</Text>
          <Text
            style={{
              fontSize: 12,
              marginBottom: 5,
              marginRight: 10,
            }}
          >
            {resume.summary}
          </Text>
        </View>

        {/* Education */}
        <View>
          <View style={styles.section}>
            <Text style={styles.heading}>Education</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.content}>{resume.education.institution}</Text>
              <Text style={styles.content}>
                {resume.education.graduationYear}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 8,
              }}
            >
              <Text style={styles.content}>{resume.education.degree}</Text>
              <Text style={styles.content}>-</Text>
              <Text style={styles.content}>
                {resume.education.fieldOfStudy}
              </Text>
            </View>
          </View>
        </View>

        {/* Experience */}
        <View>
          <View style={styles.section}>
            <Text style={styles.heading}>Experience</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.content}>{resume.experience.company}</Text>
              <Text style={styles.content}>{resume.experience.title}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 8,
              }}
            >
              <Text style={styles.content}>{resume.experience.startDate}</Text>
              <Text style={styles.content}>-</Text>
              <Text style={styles.content}>{resume.experience.endDate}</Text>
            </View>
          </View>
        </View>

        {/* Skills */}
        <View>
          <View style={styles.section}>
            <Text style={styles.heading}>Skills</Text>
            <Text style={styles.content}>{resume.skills}</Text>
          </View>
        </View>

        {/* Projects */}
        <View>
          <View style={styles.section}>
            <Text style={styles.heading}>Projects</Text>
            <View>
              <Text style={styles.content}>{resume.project1}</Text>
              <Text style={styles.content}>{resume.project2}</Text>
              <Text style={styles.content}>{resume.project3}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const ExportPDF = () => (
  <PDFViewer width={"100%"} height="1000">
    <ResumePDF />
  </PDFViewer>
);

export default ExportPDF;