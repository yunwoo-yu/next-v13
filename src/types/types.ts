export interface CloudinaryInfoData {
  access_mode: string;
  asset_id: string;
  batchId: string;
  bytes: number;
  created_at: string; // 이 날짜 형식을 Date 객체로 파싱하려면 추가 작업이 필요할 수 있습니다.
  etag: string;
  existing: boolean;
  folder: string;
  format: string;
  height: number;
  id: string;
  original_extension: string;
  original_filename: string;
  path: string;
  placeholder: boolean;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: string[]; // 또는 원하는 데이터 유형으로 변경
  thumbnail_url: string;
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
}
