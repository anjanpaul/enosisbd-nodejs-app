{{- define "nodejs-app.name" -}}
{{- .Values.app.name | default .Chart.Name -}}
{{- end -}}

{{- define "nodejs-app.labels" -}}
app: {{ include "nodejs-app.name" . }}
version: {{ .Values.image.tag | default .Chart.AppVersion }}
managed-by: helm
{{- end -}}

{{- define "nodejs-app.selectorLabels" -}}
app: {{ include "nodejs-app.name" . }}
{{- end -}}